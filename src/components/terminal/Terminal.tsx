"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { X, Minimize2, Maximize2, Terminal as TerminalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import "xterm/css/xterm.css";

interface TerminalProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function Terminal({ isOpen, onToggle }: TerminalProps) {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<XTerm | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);
    const [isMinimized, setIsMinimized] = useState(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentCommand, setCurrentCommand] = useState("");
    const router = useRouter();

    const commands: Record<string, (args: string[]) => string> = {
        help: () => `
Available commands:
  ls              - List available sections
  cd <section>    - Navigate to section (home, projects, about, contact)
  cat <file>      - Display file contents
  grep <keyword>  - Search tech stack
  clear           - Clear terminal
  pwd             - Print working directory
  whoami          - Display user info
  date            - Show current date/time
  echo <text>     - Echo text
  ssh <project>   - Connect to project
  exit            - Close terminal
`,
        ls: () => `
total 4
drwxr-xr-x  2 guest guest 4096 Feb  5 21:00 home/
drwxr-xr-x  2 guest guest 4096 Feb  5 21:00 projects/
drwxr-xr-x  2 guest guest 4096 Feb  5 21:00 about/
drwxr-xr-x  2 guest guest 4096 Feb  5 21:00 contact/
-rw-r--r--  1 guest guest  256 Feb  5 21:00 README.md
`,
        pwd: () => "/home/guest/portfolio",
        whoami: () => "guest@angelo-portfolio",
        date: () => new Date().toString(),
        echo: (args) => args.join(" "),
        clear: () => {
            xtermRef.current?.clear();
            return "";
        },
        cd: (args) => {
            const section = args[0]?.toLowerCase();
            const validSections: Record<string, string> = {
                home: "/",
                projects: "/projects",
                about: "/about",
                contact: "/contact",
            };

            if (!section) {
                return "cd: missing operand";
            }

            if (validSections[section]) {
                router.push(validSections[section]);
                return `Navigating to ${section}...`;
            }

            return `cd: ${section}: No such directory`;
        },
        cat: (args) => {
            const file = args[0]?.toLowerCase();
            const files: Record<string, string> = {
                "readme.md": `# Angelo's Portfolio
Full Stack Developer specializing in Angular & Laravel
Building modern, scalable web applications`,
                "skills.txt": `Frontend: Angular, TypeScript, React, HTML, CSS
Backend: Laravel, PHP, Node.js, MySQL
DevOps: Docker, Git, CI/CD`,
            };

            if (!file) {
                return "cat: missing file operand";
            }

            return files[file] || `cat: ${file}: No such file`;
        },
        grep: (args) => {
            const keyword = args[0]?.toLowerCase();
            const techStack = [
                "Angular", "TypeScript", "JavaScript", "HTML", "CSS",
                "Laravel", "PHP", "MySQL", "Docker", "Git"
            ];

            if (!keyword) {
                return "grep: missing search pattern";
            }

            const matches = techStack.filter(tech =>
                tech.toLowerCase().includes(keyword)
            );

            return matches.length > 0
                ? matches.join("\n")
                : `grep: no matches found for '${keyword}'`;
        },
        ssh: (args) => {
            const project = args[0];
            if (!project) {
                return "ssh: missing project name";
            }
            return `Connecting to ${project}...\nConnection established!\nType 'exit' to disconnect.`;
        },
        exit: () => {
            onToggle();
            return "Connection closed.";
        },
    };

    const executeCommand = useCallback((cmd: string) => {
        const trimmed = cmd.trim();
        if (!trimmed) return "";

        const [command, ...args] = trimmed.split(" ");
        const handler = commands[command.toLowerCase()];

        if (handler) {
            return handler(args);
        }

        return `Command not found: ${command}. Type 'help' for available commands.`;
    }, [commands, onToggle, router]);

    useEffect(() => {
        if (!isOpen || !terminalRef.current || xtermRef.current) return;

        const term = new XTerm({
            cursorBlink: true,
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            theme: {
                background: "#0a0e1a",
                foreground: "#00ff41",
                cursor: "#00ff41",
                black: "#0a0e1a",
                red: "#f44336",
                green: "#00ff41",
                yellow: "#ffff00",
                blue: "#2196f3",
                magenta: "#ff00ff",
                cyan: "#00f0ff",
                white: "#e0e0e0",
                brightBlack: "#616161",
                brightRed: "#ff5252",
                brightGreen: "#69f0ae",
                brightYellow: "#ffff8d",
                brightBlue: "#448aff",
                brightMagenta: "#ff4081",
                brightCyan: "#18ffff",
                brightWhite: "#ffffff",
            },
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(terminalRef.current);
        fitAddon.fit();

        xtermRef.current = term;
        fitAddonRef.current = fitAddon;

        // Welcome message
        term.writeln("\x1b[1;32m╔══════════════════════════════════════════════════════════╗\x1b[0m");
        term.writeln("\x1b[1;32m║\x1b[0m     \x1b[1;36mAngelo's Portfolio Terminal v2.0\x1b[0m                  \x1b[1;32m║\x1b[0m");
        term.writeln("\x1b[1;32m╚══════════════════════════════════════════════════════════╝\x1b[0m");
        term.writeln("");
        term.writeln("Welcome! Type \x1b[1;33mhelp\x1b[0m to see available commands.");
        term.writeln("");
        term.write("\x1b[1;32mguest@angelo-portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ");

        let currentLine = "";

        term.onData((data) => {
            const code = data.charCodeAt(0);

            // Handle Enter
            if (code === 13) {
                term.writeln("");
                const output = executeCommand(currentLine);
                if (output) {
                    term.writeln(output);
                }
                if (currentLine.trim()) {
                    setCommandHistory(prev => [...prev, currentLine]);
                }
                currentLine = "";
                setCurrentCommand("");
                setHistoryIndex(-1);
                term.write("\x1b[1;32mguest@angelo-portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ");
            }
            // Handle Backspace
            else if (code === 127) {
                if (currentLine.length > 0) {
                    currentLine = currentLine.slice(0, -1);
                    setCurrentCommand(currentLine);
                    term.write("\b \b");
                }
            }
            // Handle Ctrl+C
            else if (code === 3) {
                term.writeln("^C");
                currentLine = "";
                setCurrentCommand("");
                term.write("\x1b[1;32mguest@angelo-portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ");
            }
            // Handle Ctrl+L (clear)
            else if (code === 12) {
                term.clear();
                term.write("\x1b[1;32mguest@angelo-portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ");
            }
            // Handle printable characters
            else if (code >= 32 && code < 127) {
                currentLine += data;
                setCurrentCommand(currentLine);
                term.write(data);
            }
        });

        // Handle resize
        const handleResize = () => {
            fitAddon.fit();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            term.dispose();
            xtermRef.current = null;
        };
    }, [isOpen, executeCommand]);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed ${isMinimized ? "bottom-4 right-4 w-96" : "bottom-4 right-4 w-[600px] h-[400px]"} 
        z-50 terminal-box backdrop-blur-sm transition-all duration-300`}
            style={{
                resize: isMinimized ? "none" : "both",
                overflow: "hidden",
            }}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-card border-b border-primary/30 px-4 py-2 cursor-move">
                <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono text-primary">Terminal</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="p-1 hover:bg-primary/10 rounded transition-colors"
                    >
                        {isMinimized ? (
                            <Maximize2 className="w-4 h-4 text-primary" />
                        ) : (
                            <Minimize2 className="w-4 h-4 text-primary" />
                        )}
                    </button>
                    <button
                        onClick={onToggle}
                        className="p-1 hover:bg-destructive/10 rounded transition-colors"
                    >
                        <X className="w-4 h-4 text-destructive" />
                    </button>
                </div>
            </div>

            {/* Terminal Content */}
            {!isMinimized && (
                <div
                    ref={terminalRef}
                    className="w-full h-[calc(100%-40px)] p-2 overflow-hidden"
                />
            )}
        </div>
    );
}
