type AddProps = {
	className?: string;
};

export default function Add({ className }: AddProps = {}) {
	return (
		<svg className={` ${className}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
			<path d="M450-450H220v-60h230v-230h60v230h230v60H510v230h-60v-230Z" />
		</svg>
	);
}
