import React from 'react'
import { filterProjects } from './projectSorting'

export default function ProjectButton(props) {
	var name = props.name.toLowerCase()

	return (
		<span className={"sort_" + name + " btn " + (props.name === 'All' ? 'active' : '')} onClick={() => filterProjects(name)} style={{
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