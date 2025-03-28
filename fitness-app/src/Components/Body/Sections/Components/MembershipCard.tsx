import React from 'react';

// Type definition for a pricing plan
interface PricingPlan {
  type: string;
  price: number;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  buttonText?: string;
}

// Pricing component
const GymPricingPlans: React.FC<{ 
  plans: PricingPlan[], 
  onPlanSelect?: (plan: PricingPlan) => void 
}> = ({ 
  plans, 
  onPlanSelect = () => {} 
}) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0 md:space-x-4">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`
            w-full md:w-[23rem] h-[46rem] 
            border border-cyan-600 
            bg-[#262626] 
            flex flex-col
            rounded-lg
            overflow-hidden
            hover:scale-110
            transition-all
            ease-in-out
            duration-500
          `}
        >
          <div className="text-center">
            <h1 className="font-bold text-4xl py-6 px-16 text-white">
              {plan.type}
            </h1>
          </div>
          
          <div className="flex flex-col w-full py-6 px-14 bg-[#303030]">
            <h1 className="text-3xl font-semibold pb-2 text-white">${plan.price.toFixed(2)}</h1>
            <h2 className="text-xl text-gray-300">{plan.description}</h2>
          </div>
          
          <div className="flex flex-col px-12 py-6 gap-4 flex-grow">
            {plan.features.map((feature, featureIndex) => (
              <div 
                key={featureIndex} 
                className={`
                  text-white text-lg font-thin
                  ${featureIndex === 1 ? 'border-y border-cyan-500 py-4' : ''}
                `}
              >
                <h2 className="text-cyan-500 font-semibold">{feature.title}</h2>
                <span>{feature.description}</span>
              </div>
            ))}
          </div>
          
          <div className="w-full flex items-center justify-center my-8">
            <button 
              onClick={() => onPlanSelect(plan)}
              className="
                px-4 py-3 
                bg-cyan-400 
                text-black 
                hover:bg-cyan-200 
                rounded-md 
                transition-colors 
                duration-300 
                ease-in-out
                focus:outline-none 
                focus:ring-2 
                focus:ring-cyan-500 
                focus:ring-opacity-50
              "
            >
              {plan.buttonText || 'Buy this pass'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

//Main Component 
const MembershipCard: React.FC = () => {
  const gymPlans: PricingPlan[] = [
    {
      type: 'One-time pass',
      price: 19.99,
      description: 'Pay once and enjoy a full day of training.',
      features: [
        {
          title: 'Gym Access:',
          description: 'Access the gym anytime for a full day.'
        },
        {
          title: 'No Commitment:',
          description: 'Train for a day, no strings attached'
        },
        {
          title: 'Flexible Option:',
          description: 'Ideal for busy schedule or trying out personal training.'
        }
      ]
    },
    {
      type: 'Flexible Subscription',
      price: 59.99,
      description: 'Pay monthly with a flexible subscription.',
      features: [
        {
          title: 'Unlimited Access:',
          description: 'Enjoy 24/7 gym access with no expiration date.'
        },
        {
          title: 'Support:',
          description: 'Maintain consistent progress.'
        },
        {
          title: 'Flexible Commitment:',
          description: 'Cancel anytime without losing your training history.'
        }
      ]
    },
    {
      type: '6-month membership',
      price: 299.00,
      description: 'Enjoy the benefits for 6 months.',
      features: [
        {
          title: 'Unlimited Access:',
          description: 'Train at any time with unlimited gym access.'
        },
        {
          title: 'Consistent Progress:',
          description: 'Regular training sessions.'
        },
        {
          title: 'Flexible Option:',
          description: 'Ideal for busy schedule or trying out personal training.'
        }
      ]
    }
  ];

  const handlePlanSelect = (plan: PricingPlan) => {
    console.log('Selected plan:', plan);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <GymPricingPlans 
        plans={gymPlans} 
        onPlanSelect={handlePlanSelect} 
      />
    </div>
  );
};

export default MembershipCard;