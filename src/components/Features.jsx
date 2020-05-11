import React from 'react'
import FeatureItem from './FeaturesItem'

const Features = () => {
    return (
        <section className='features'>
            <div className="container">
                <h1>Why choose <br/> Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub. <br/> Control your finances like never before.</p>
                <div className="featuresItem">
                    <FeatureItem
                        icon='online'
                        title='Online Banking'
                        text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
                    />

                    <FeatureItem
                        icon='budgeting'
                        title='Simple Budgeting'
                        text='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
                    />

                    <FeatureItem
                        icon='onboarding'
                        title='Fast Onboarding'
                        text='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
                    />

                    <FeatureItem
                        icon='api'
                        title='Open API'
                        text='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
                    />
                </div>
            </div>
        </section>
    )
}

export default Features
