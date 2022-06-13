export default function Item(props:{Nome:string}) {
    const {Nome} = props;
    return (
        <li>{Nome}</li>
    )
  }