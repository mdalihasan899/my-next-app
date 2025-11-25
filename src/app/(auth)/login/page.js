// app/login/page.js
import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen bg-industrial-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bolt-pattern opacity-5"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-copper to-rust border-3 border-industrial-900 shadow-industrial flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-industrial-900 bg-steel-300 flex items-center justify-center">
                <div className="w-4 h-4 bg-industrial-900"></div>
              </div>
            </div>
            <div className="absolute -inset-2 bolt-pattern"></div>
          </div>
        </div>
        
        <h2 className="text-center text-3xl font-industrial font-black text-industrial-900 uppercase tracking-tight">
          SECURE ACCESS
        </h2>
        <p className="mt-2 text-center text-sm text-industrial-600 font-utility uppercase tracking-wider">
          AUTHORIZED PERSONNEL ONLY
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="panel-industrial bg-white border-industrial-900">
          {/* Social Login */}
          <div>
            <button className="w-full flex justify-center items-center px-4 py-4 border-2 border-industrial-900 bg-steel-200 font-industrial font-bold text-industrial-900 uppercase tracking-wider shadow-industrial hover:shadow-industrial-inner hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-sm border border-industrial-900 mr-3"></div>
              AUTHENTICATE WITH GOOGLE
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-industrial-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-industrial-500 font-utility uppercase tracking-wider font-bold">OR</span>
              </div>
            </div>
          </div>

          {/* Credentials Form */}
          <form className="mt-6 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                OPERATOR ID
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-industrial"
                  placeholder="OPERATOR@INDUSTRIAL.COM"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                SECURITY CODE
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-industrial"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-copper focus:ring-copper border-industrial-900 rounded-sm"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-industrial-900 font-utility font-bold uppercase tracking-wider">
                  MAINTAIN SESSION
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-industrial font-bold text-copper hover:text-rust uppercase tracking-wider">
                  CODE RECOVERY
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn-industrial bg-copper hover:bg-rust py-4 text-lg"
              >
                INITIATE ACCESS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 