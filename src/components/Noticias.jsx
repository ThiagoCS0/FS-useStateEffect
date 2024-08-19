import { useState, useEffect } from "react";
function Noticias() {
	const [noticia, defNoticias] = useState(null)
	const [idNoticia, idsNoticia] = useState(1)
	useEffect(() => {
		const buscarNoticias = async () => {
			console.log(idNoticia)
			const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/` + idNoticia)
			const noticiaJson = await resposta.json()
			defNoticias(noticiaJson)
		}
		const espera = setInterval(() => {
			idsNoticia(id => id + 1)
		}, 30000)
		buscarNoticias()
		return () => {
			clearInterval(espera)
			defNoticias(null)
		}
	}, [idNoticia])
	return (
		<div>
			{
				noticia ?
					(<div><h1>{noticia.title}</h1><p>{noticia.body}</p></div>) :
					// (user.forEach(us => { <div><h1>Nome: {us.name}</h1><h1>Email: {us.email}</h1></div> })) :
					(<p>Carregando perfil de usuário.</p>)
			}
		</div>
	)
}

export default Noticias