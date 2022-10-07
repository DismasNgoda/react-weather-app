import React from 'react'

function Blog() {
  return (
    <div className="container">
      <h1>Climate Change Blogs.</h1>
    <div className="row">
      <div className="col-sm-4">
      <p>
        "Climate Change is the defining issue of our time and we are at a defining moment. From shifting weather patterns that threaten food production, to rising sea levels that increase the risk of catastrophic flooding, the impacts of climate change are global in scope and unprecedented in scale. Without drastic action today, adapting to these impacts in the future will be more difficult and costly."
         <a href='https://www.un.org/en/global-issues/climate-change'>The United Nations, 2022</a>
      </p>
      </div>
      <div className="col-sm-8">
        <div className='col-sm'>
        <p>"The effects of human-caused global warming are happening now, are irreversible on the timescale of people alive today, and will worsen in the decades to come."
        <a href='https://climate.nasa.gov/effects/'>Global CLimate Change - NASA, 2022</a>
        </p>

        </div>
        <div className='col-sm'>
        <p>"The urgency and scale of the challenge requires countries to learn quickly from each other, adapt to their own special circumstances, and be bold in implementing policies that bend the emissions curve and improve livelihoods."
        <a href='https://www.worldbank.org/en/topic/climatechange/overview'>The World Bank, 2022</a>
        </p>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog