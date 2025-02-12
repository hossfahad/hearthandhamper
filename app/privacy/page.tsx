export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us when you:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Fill out forms on our website</li>
          <li>Communicate with us via email or contact forms</li>
          <li>Request information about our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Provide and maintain our services</li>
          <li>Respond to your requests and inquiries</li>
          <li>Send you important updates about our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
        <p className="mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-6">We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at hoss.fahad@gmail.com.</p>
      </div>
    </div>
  )
} 