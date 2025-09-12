import React from 'react'

const page = () => {
  return (
    <div>
      <section className='h-screen w-screen'>
<img src="image/Banner_about.jpg" alt=""  className='w-full h-full object-cover'/>
      </section>

      {/* About KCS Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About KCS</h2>
            <p className="text-gray-600 leading-relaxed">
              Karo Call Services(KCS) is a trusted service provider specializing in professional installation, repair,
              and sales services. With a commitment to quality and customer satisfaction, our skilled team ensures
              reliable, efficient, and timely services tailored to your needs. Whether it's setting up new equipment,
              fixing technical issues, we deliver excellence every time. Serving with integrity and expertise, we aim to
              be your go-to partner for all automotive service needs.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-orange-500 text-sm mb-2">No of years</div>
                <div className="text-4xl font-bold">2</div>
              </div>
              <div>
                <div className="text-orange-500 text-sm mb-2">Handymen</div>
                <div className="text-4xl font-bold">101</div>
              </div>
              <div>
                <div className="text-orange-500 text-sm mb-2">Happy Client</div>
                <div className="text-4xl font-bold">348</div>
              </div>
              <div>
                <div className="text-orange-500 text-sm mb-2">Pincodes</div>
                <div className="text-4xl font-bold">81</div>
              </div>
            </div>
          </div>
        </section>


       {/* Vision, Mission, Goals Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Vision */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be the best service provider company across Chhattisgarh and expand to a Pan-India level. We aim to
                  set new standards for service excellence by offering reliable, innovative installation, repair, and
                  automotive solutions while building long-term relationships with our customers.
                </p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional automotive services that exceed customer expectations, while fostering a
                  culture of innovation, reliability, and trust. Our mission is to simplify service experiences, deliver
                  consistent quality, and become a name customers can confidently rely on.
                </p>
              </div>

              {/* Goals */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Goals</h3>
                <p className="text-gray-600">
                  To enhance the quality of repair and installation services and extend our offerings into complete home
                  service solutions. Our goal is to grow as a trusted partner for individuals and businesses, expanding
                  from Chhattisgarh to a recognized brand at the Pan-India level.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default page
