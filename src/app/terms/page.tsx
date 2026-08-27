import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-sm font-medium tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-white/40 mb-12 text-sm tracking-widest uppercase">Last Updated: August 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none text-white/70 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">2. Services and Deliverables</h2>
            <p>
              Naavsoch Studios provides digital design, web development, branding, and performance marketing services. Specific deliverables, timelines, and payment terms will be outlined in a separate Statement of Work (SOW) or proposal provided to each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise agreed upon in writing, Naavsoch Studios retains all intellectual property rights to the preliminary designs, working files, and underlying code until full payment is received. Upon final payment, the final deliverables become the property of the client, though we reserve the right to display the work in our portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">4. Client Responsibilities</h2>
            <p>
              The client agrees to provide timely feedback, content, and approvals required for the progression of the project. Delays in client feedback may result in timeline extensions and potential additional project management fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">5. Revisions and Modifications</h2>
            <p>
              Project proposals include a specified number of revision rounds. Additional revisions beyond the agreed-upon scope will be billed at our standard hourly rate. Major scope changes will require a revised proposal and agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Naavsoch Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or the services we provide.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">7. Contact Information</h2>
            <p>
              If you have any questions or require clarification regarding these terms, please reach out to us at:
            </p>
            <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p className="font-bold text-white mb-2">Naavsoch Studios</p>
              <p>Email: workatnaavsoch@gmail.com</p>
              <p>Phone: +91 9663382836</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
