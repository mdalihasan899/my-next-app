// src/app/contact/page.js
export default function Contact() {
  return (
    <div className="min-h-screen industrial-bg-pattern py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-industrial p-8">
          <div className="text-center mb-8">
            <span className="badge-industrial-copper text-lg mb-4">
              CONTACT OPERATIONS
            </span>
            <h1 className="text-4xl font-industrial font-black text-industrial-900 mb-4 uppercase tracking-tight">
              GET IN TOUCH
            </h1>
            <p className="text-industrial-600 font-utility text-lg">
              READY TO DISCUSS YOUR INDUSTRIAL COMPONENT NEEDS? OUR TEAM IS STANDING BY.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                  OPERATOR NAME
                </label>
                <input
                  type="text"
                  className="input-industrial"
                  placeholder="ENTER FULL NAME"
                />
              </div>
              <div>
                <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                  COMPANY
                </label>
                <input
                  type="text"
                  className="input-industrial"
                  placeholder="COMPANY NAME"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="input-industrial"
                  placeholder="OPERATOR@COMPANY.COM"
                />
              </div>
              <div>
                <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  className="input-industrial"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                PROJECT REQUIREMENTS
              </label>
              <select className="input-industrial">
                <option value="">SELECT PROJECT TYPE</option>
                <option value="components">INDUSTRIAL COMPONENTS</option>
                <option value="custom">CUSTOM FABRICATION</option>
                <option value="consulting">TECHNICAL CONSULTING</option>
                <option value="maintenance">MAINTENANCE PARTS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-industrial font-bold text-industrial-900 uppercase tracking-wider mb-2">
                MESSAGE
              </label>
              <textarea
                rows={6}
                className="input-industrial resize-none"
                placeholder="DESCRIBE YOUR INDUSTRIAL REQUIREMENTS AND SPECIFICATIONS..."
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-copper focus:ring-copper border-industrial-900 rounded-sm"
              />
              <label className="ml-2 block text-sm text-industrial-900 font-utility font-bold uppercase tracking-wider">
                I AGREE TO RECEIVE INDUSTRIAL UPDATES AND TECHNICAL SPECIFICATIONS
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn-industrial-copper py-4 text-lg"
            >
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}