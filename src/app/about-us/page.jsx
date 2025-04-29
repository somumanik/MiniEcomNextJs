// pages/about.js

export default function About() {
    return (
      <div className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are a passionate team dedicated to providing the best solutions for your needs. Our mission is to help you grow and succeed with our expertise and innovative ideas.
          </p>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-4 text-gray-500">
                John is the visionary behind our company, with over 10 years of experience in the industry.
              </p>
            </div>
  
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="mt-4 text-gray-500">
                Jane leads our technology team and is passionate about building scalable and reliable systems.
              </p>
            </div>
  
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
              <p className="text-gray-600">Marketing Director</p>
              <p className="mt-4 text-gray-500">
                Alex has over 7 years of experience in marketing, focusing on brand strategy and customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
