import { useState } from 'react';
import Question from './question';
import { NavLink } from 'react-router-dom';

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div class="flex flex-col items-center prose ml-5">
			<div>
				<div className="flex flex-col">
					<NavLink to="/">Back to Home</NavLink>
				</div>
			</div>
			<div className="flex flex-col">
				<Question
					title={'1. What services does your real estate agency provide?'}
					isActive={activeIndex === 0}
					onShow={() => setActiveIndex(0)}
				>
					We offer a range of services including buying, selling, leasing, and
					property management for residential and commercial properties. We also
					provide real estate consulting and market analysis to help you make
					informed decisions.
				</Question>
				<Question
					title={'2. How do I get my property listed for sale or rent?'}
					isActive={activeIndex === 1}
					onShow={() => setActiveIndex(1)}
				>
					To list your property, you can either contact one of our agents
					directly or fill out our online form. We will arrange a property
					evaluation and guide you through the listing process, including
					setting a competitive price and marketing your property.
				</Question>
				<Question
					title={'3. What are the typical fees for your services?'}
					isActive={activeIndex === 2}
					onShow={() => setActiveIndex(2)}
				>
					Our fees vary depending on the service, but typical real estate
					commissions range between 5% to 6% for selling properties. For
					leasing, fees are generally one month’s rent. Contact us for specific
					details regarding your property and transaction.
				</Question>
				<Question
					title={'4. How long does it take to sell a property?'}
					isActive={activeIndex === 3}
					onShow={() => setActiveIndex(3)}
				>
					The time it takes to sell a property depends on various factors such
					as location, market conditions, and pricing. On average, properties
					can take anywhere from a few weeks to several months to sell. We use
					professional marketing strategies to ensure the best exposure for your
					property.
				</Question>
				<Question
					title={'5. How do I know what my property is worth?'}
					isActive={activeIndex === 4}
					onShow={() => setActiveIndex(4)}
				>
					We offer a free, no-obligation property evaluation where our agents
					will assess the value of your property based on comparable sales in
					the area, current market trends, and the condition of your property.
				</Question>
				<Question
					title={'6. What is the process of buying a home?'}
					isActive={activeIndex === 5}
					onShow={() => setActiveIndex(5)}
				>
					The home-buying process involves determining your budget, getting
					pre-approved for a mortgage, searching for homes, making an offer,
					negotiating the terms, conducting inspections, and closing the sale.
					Our agents will guide you every step of the way to make the process as
					smooth as possible.
				</Question>
				<Question
					title={
						'7. What are closing costs, and how much should I expect to pay?'
					}
					isActive={activeIndex === 6}
					onShow={() => setActiveIndex(6)}
				>
					Closing costs are the expenses incurred when finalizing a real estate
					transaction. They typically range from 2% to 5% of the property's
					purchase price and include fees such as loan origination, title
					insurance, escrow fees, and property taxes.
				</Question>
				<Question
					title={'8. Do you offer property management services?'}
					isActive={activeIndex === 6}
					onShow={() => setActiveIndex(6)}
				>
					Yes, we offer comprehensive property management services, including
					tenant screening, rent collection, maintenance coordination, and lease
					enforcement for both residential and commercial properties.
				</Question>
				<Question
					title={'9. What should I look for when choosing a real estate agent?'}
					isActive={activeIndex === 6}
					onShow={() => setActiveIndex(6)}
				>
					When choosing a real estate agent, consider their experience, local
					market knowledge, communication style, and client reviews. It's
					important to work with someone you trust and who understands your
					needs.
				</Question>
				<Question
					title={'10. What is the current market trend in my area?'}
					isActive={activeIndex === 6}
					onShow={() => setActiveIndex(6)}
				>
					Real estate markets fluctuate based on supply, demand, interest rates,
					and other economic factors. We offer detailed market reports to give
					you an overview of current trends in your area. Contact us to receive
					a customized report.
				</Question>
			</div>
		</div>
	);
};

export default FAQ;
