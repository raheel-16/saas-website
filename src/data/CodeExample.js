
export const codeExamples = {
    "App.jsx": `
        import { useSate } from "react";
        import { CodeFlow } from "@codeflow/ai";

        function App() {
            const [code, setCode] = useState("");

            const handleAICompletion = async () => {
                const suggestion = await CodeFlow.complete(code);
                setCode(suggestion);
            };

            return (
                <div className="app">
                <CodeEditor 
                    onChange={setCode}
                    onAI={handleAICompletion}
                />
                </div>
            );
        }
    `,

    "Hero.jsx": `
        import { useSate, useEffect } from "react";
        import { CodeFlow } from "@codeflow/ai";

        export default function Hero() {
            const [code, setCode] = useState("");

            const handleAICompletion = async () => {
                const suggestion = await CodeFlow.complete(code);
                setCode(suggestion);
            };

            return (
                <div className="app">
                <CodeEditor 
                    onChange={setCode}
                    onAI={handleAICompletion}
                />
                </div>
            );
        }
    `,

    "Navbar.jsx": `
        import { useSate } from "react";
        import { CodeFlow } from "@codeflow/ai";

        function App() {
            const [code, setCode] = useState("");

            const handleAICompletion = async () => {
                const suggestion = await CodeFlow.complete(code);
                setCode(suggestion);
            };

            return (
                <div className="app">
                <CodeEditor 
                    onChange={setCode}
                    onAI={handleAICompletion}
                />
                </div>
            );
        }
    `,

}

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "AI-Powered Code Completion",
        description: "Leverage the power of AI to autocomplete your code snippets with context-aware suggestions."
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡",
        title: "Lightning Fast Performance",
        description: "Experience the speed of AI-driven code suggestions at your fingertips."
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🚀",
        title: "Seamless Integration",
        description: "Easily integrate AI code completion into your existing development workflow."
    },

}