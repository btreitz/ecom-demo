type BaseFilterProps = {
	title: string;
	items: Record<string, string>;
	isSelected: (key: string) => boolean;
	onSelect: (key: string) => void;
};

export default function BaseFilter({ title, items, isSelected, onSelect }: BaseFilterProps) {
	return (
		<div>
			<div className=" text-lg pb-4 pt-0">{title}</div>
			<ul className=" grid grid-cols-2 auto-rows-fr gap-2 list-none">
				{Object.entries(items).map(([key, value]) => (
					<li
						key={key}
						style={{ boxShadow: isSelected(key) ? 'inset 0 0 0 1px #000' : '' }}
						className={` ${
							isSelected(key) ? 'border-black' : 'border-gray-400'
						} text-sm rounded border-[1px] px-4 py-2 flex items-center transition ease-in-out hover:bg-gray-100 hover:cursor-pointer`}
						onClick={() => onSelect(key)}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
