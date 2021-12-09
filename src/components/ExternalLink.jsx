export default function ExternalLink(props) {
	return <a className="link" href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
}