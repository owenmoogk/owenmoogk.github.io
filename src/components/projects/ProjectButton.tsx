import React from 'react'

export default function ProjectButton(props: {
	name: string;
	search: (filter: string, buttonPressed: boolean) => void;
}) {
	var name = props.name.toLowerCase()

	return (
		<span className={"sort_" + name + " btn " + (props.name === 'All' ? 'active' : '')} onClick={() => props.search(name, true)} style={{
			border: '2px solid var(--' + name + ')',
			color: 'var(--' + name + ')',
		}}
		>
			<p>{props.name}</p>
			<style dangerouslySetInnerHTML={{
				__html: `
				.sort_${name}.active{
					background-color: var(--${name}) !important;
					color: var(--textColor) !important
				}
				.sort_${name}:hover{
					background-color: var(--${name}) !important;
					color: var(--textColor) !important
				}
			`}} />
		</span>
	)
}