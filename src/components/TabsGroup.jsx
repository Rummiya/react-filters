import { useState } from 'react';

const TabsGroup = ({ title, items }) => {
	const [activeTab, setActiveTab] = useState(0);

	const selectTab = i => {
		if (i === activeTab) {
			return setActiveTab(0);
		}

		setActiveTab(i);
	};

	return (
		<div>
			<span className='text-white text-sm mb-2 ml-2 block'>{title}</span>
			<div className='flex items-center flex-wrap gap-2'>
				{items.map((item, i) => (
					<button
						key={item}
						onClick={() => selectTab(i + 1)}
						className={`${
							activeTab === i + 1
								? 'text-white text-sm bg-bg-tab px-3 py-2 rounded-md transition-colors'
								: 'text-white text-sm bg-zinc-800 px-3 py-2 rounded-md transition-opacity hover:opacity-50'
						}`}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};

export default TabsGroup;
