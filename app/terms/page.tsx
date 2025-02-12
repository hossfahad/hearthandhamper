export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
        <p className="mb-6">We provide web design and development services for laundromats. The specific details, deliverables, and terms of each service will be outlined in individual service agreements.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-6">All content, designs, and materials created by us remain our property until final payment is received, at which point specified deliverables transfer to the client.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
        <p className="mb-6">Payment terms will be specified in individual service agreements. We reserve the right to suspend services for overdue payments.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="mb-6">We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
        <p className="mb-6">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p className="mb-6">For any questions regarding these terms, please contact us at hoss.fahad@gmail.com.</p>
      </div>
    </div>
  )
} 