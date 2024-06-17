type RemoveProps = {
	className?: string;
};

export default function Remove({ className }: RemoveProps = {}) {
	return (
		<svg className={` ${className}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
			<path d="M220-450v-60h520v60H220Z" />
		</svg>
	);
}
