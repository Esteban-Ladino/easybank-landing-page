import React from 'react'
import ArticlesCard from './ArticlesCard'

import currencyImg from '../assets/static/image-currency.jpg'
import restaurantImg from '../assets/static/image-restaurant.jpg'
import planeImg from '../assets/static/image-plane.jpg'
import confettiImg from '../assets/static/image-confetti.jpg'

const Articles = () => {
    return (
        <section className="articles">
            <div className="container">
                <h1>Latest Articles</h1>
                <div className="articlesCards">
                    <ArticlesCard 
                        image={currencyImg}
                        author='Claire Robinson'
                        title='Receive money in any currency with no fees'
                        details='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
                    />
                    <ArticlesCard
                        image={restaurantImg}
                        author='Wilson Hutton'
                        title='Treat yourself without worrying about money'
                        details='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
                    />
                    <ArticlesCard 
                        image={planeImg}
                        author='Wilson Hutton'
                        title='Take your Easybank card wherever you go'
                        details='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
                    />
                    <ArticlesCard
                        image={confettiImg}
                        author='Claire Robinson'
                        title='Our invite-only Beta accounts are now live!'
                        details='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'                
                    />
                </div>
            </div>
        </section>
    )
}

export default Articles
