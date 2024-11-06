import Container from '../components/Container';
import TabsGroup from '../components/TabsGroup';

const Filters = () => {
	const marks = ['любой', 'honda', 'yamaha'];
	const typeOfBike = ['любой', 'scooter', 'sport'];
	const engineСapacity = ['электро', '110сс', '150сс'];
	const other = [
		'с ABC',
		'ТОЛЬКО с stnk',
		'ТОЛЬКО с surfrack',
		'ТОЛЬКО в пленке',
	];
	const term = ['месяц', 'неделя', 'день'];

	return (
		<div className='bg-bg-filter max-w-[325px] mx-auto p-2 rounded-xl'>
			<Container>
				<button className='text-indigo-700 text-sm mb-20 transition-opacity hover:opacity-50	'>
					Назад
				</button>

				<div className='flex flex-col gap-5'>
					<TabsGroup title={'марка'} items={marks} />
					<TabsGroup title={'тип байка'} items={typeOfBike} />
					<TabsGroup
						title={'объем двигателя / электро'}
						items={engineСapacity}
					/>
					<TabsGroup title={'прочее'} items={other} />
					<TabsGroup title={'СРОК АРЕНДЫ'} items={term} />
				</div>
				<div className='mt-12'>
					<p className='text-zinc-500 text-xs mb-2'>Всего найдено: 900</p>
					<button className='bg-zinc-700 text-white w-full py-2 rounded-lg hover:opacity-50 transition-opacity'>
						Показать
					</button>
				</div>
			</Container>
		</div>
	);
};

export default Filters;
