import { Dispatch, SetStateAction } from "react";

export default function FilterButton(props: {
	displayName?: string;
	name: string;
	setFilter: Dispatch<SetStateAction<string>>;
	filter: string;
	handle?: string;
}) {
	var nameLower = props.name.toLowerCase().replace(" ", "_")
	var handle = props.handle ?? nameLower
	var filter = props.filter.toLowerCase()
	var displayName = props.displayName ?? props.name

	return (
		<span className={"sort_" + nameLower + " btn " + (filter === handle ? 'active' : '')} onClick={() => props.setFilter(handle)} style={{
			border: '2px solid var(--' + nameLower + ')',
			color: 'var(--' + nameLower + ')',
		}}
		>
			<p>{displayName}</p>
			<style dangerouslySetInnerHTML={{
				__html: `
				.sort_${nameLower}.active{
					background-color: var(--${nameLower}) !important;
					color: var(--textColor) !important
				}
				.sort_${nameLower}:hover{
					background-color: var(--${nameLower}) !important;
					color: var(--textColor) !important
				}
			`}} />
		</span>
	)
}