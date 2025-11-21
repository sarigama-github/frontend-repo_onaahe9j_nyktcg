import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    // This is a UI-only demo handler. Replace with your API call later.
    setTimeout(() => {
      setLoading(false);
      setMessage("Demo only: form submitted. Hook this up to your API.");
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-sm bg-slate-800/60 border border-slate-700/60 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a5 5 0 100-10 5 5 0 000 10z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21a7 7 0 10-14 0"/></svg>
            </div>
            <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
            <p className="text-slate-300/80 text-sm mt-1">Sign in to your account</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-slate-200">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-xs text-blue-300 hover:text-blue-200 transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 select-none">
                <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                <span className="text-sm text-slate-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-300 hover:text-blue-200">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 active:bg-blue-700 transition shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>

            {message && (
              <p className="text-center text-xs text-slate-300/80">{message}</p>
            )}

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-slate-800/60 px-2 text-xs text-slate-400">or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700/80 text-slate-200 hover:bg-slate-900 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 00-3.162 19.486c.5.093.682-.217.682-.481 0-.237-.009-.866-.013-1.7-2.776.603-3.362-1.34-3.362-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.34-2.217-.252-4.55-1.108-4.55-4.936 0-1.09.39-1.982 1.029-2.681-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.505.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.699 1.028 1.59 1.028 2.682 0 3.838-2.337 4.681-4.561 4.93.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .266.18.579.688.48A10 10 0 0012 2z"/></svg>
                <span className="sr-only">GitHub</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700/80 text-slate-200 hover:bg-slate-900 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path fill="#EA4335" d="M12 10.2v3.6h5.09c-.22 1.16-1.34 3.4-5.09 3.4-3.06 0-5.55-2.53-5.55-5.6S8.94 6 12 6c1.75 0 2.92.74 3.59 1.38l2.44-2.36C16.7 3.84 14.52 3 12 3 6.96 3 2.91 7.03 2.91 12S6.96 21 12 21c5.04 0 8.36-3.54 8.36-8.52 0-.57-.06-1-.14-1.46H12z"/><path fill="#34A853" d="M3.65 7.15L6.61 9.32C7.4 7.29 9.5 5.94 12 5.94c1.75 0 2.92.74 3.59 1.38l2.44-2.36C16.7 3.84 14.52 3 12 3c-3.58 0-6.6 2.07-8.35 5.15z"/><path fill="#4285F4" d="M12 21c2.88 0 5.3-.96 7.07-2.61l-3.27-2.68c-.9.61-2.07 1.04-3.8 1.04-3.75 0-4.87-2.24-5.09-3.4H3.72A8.94 8.94 0 003 12c0-1.06.2-2.06.55-2.96h-.02l3.06 2.38c-.15.46-.24.96-.24 1.48 0 3.07 2.49 5.6 5.55 5.6z"/><path fill="#FBBC05" d="M3.55 9.04A9.06 9.06 0 003 12c0 1.39.29 2.7.8 3.87l3.92-3.05c-.2-.59-.24-1.25-.04-1.88L3.55 9.04z"/></svg>
                <span className="sr-only">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700/80 text-slate-200 hover:bg-slate-900 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.525 8.169c-.063-.047-2.266-1.218-4.425-.512-1.066.348-1.954 1.339-2.269 1.833V8.09H7.09v12.373h3.906v-6.735c0-.36.027-.72.132-.977.294-.72.966-1.469 2.086-1.469 1.477 0 2.067 1.11 2.067 2.741v6.44h3.906v-6.91c0-3.699-1.98-5.418-4.662-5.418-2.181 0-3.145 1.217-3.675 2.067h.027V8.09H9.86c.05 1.093 0 12.373 0 12.373h3.906v-6.91c0-.36.028-.72.133-.977.295-.72.966-1.469 2.087-1.469 1.476 0 2.066 1.11 2.066 2.741v6.44H24V0H0v24h17.525V8.169z"/></svg>
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Dont have an account? <a href="#" className="text-blue-300 hover:text-blue-200">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
