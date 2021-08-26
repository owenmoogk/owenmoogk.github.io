export default function SkillIcon(props) {
	return (
		<tr className='skill'>
			<td className='name'>{props.name}</td>
			<td>
				<div className='bar'>
					<div className='barFill' style={{width: props.doLoad ? String(props.percent)+'%' : '0%'}}></div>
				</div>
			</td>
		</tr>
	);
}