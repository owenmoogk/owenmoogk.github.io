import React from 'react'

export default function ProjectButton(props) {
	var name = props.name.toLowerCase()

	return (
		<span className={"sort_" + name + " btn " + (props.name === 'All' ? 'active' : '')} onClick={() => props.filterProjects(name)} style={{
			border: '2px solid var(--' + name + ')',
			color: 'var(--' + name + ')',
		}}
		>
			{props.name}
			<style dangerouslySetInnerHTML={{
				__html: `
				.sort_${name}.active{
					background-color: var(--${name}) !important;
					color: var(--${props.name == "All" ? "backgroundColor" : "textColor"}) !important
				}
				.sort_${name}:hover{
					background-color: var(--${name}) !important;
					color: var(--${props.name == "All" ? "backgroundColor" : "textColor"}) !important
				}
			`}} />
		</span>
	)
}