import React, { useEffect, useState } from 'react'
import requestUserRepos from '../../services/simpleRequest/api.js'
import Column from '../../components/Column'

const ListAPI = () => {
  const [post, setPosts] = useState([])
  const [status, setStatus] = useState(false)
  const [trigger, setTrigger] = useState(true)
  const [renderError, setRenderError] = useState(false)

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const response = await requestUserRepos()
        setPosts(response.data)
      } catch (error) {
        setRenderError(true)
      } finally {
        setStatus(true)
        setTrigger(false)
      }
    }
    handleGetPosts()
  }, [])

  return (
    <Column p={40} alignItems='center'>
      <div>
        {status &&
          post.map(item => (
            <div key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>{item.full_name}</p>
                <br></br>
              </div>
            </div>
          ))}
        {trigger && (
          <div>
            <h1>Aguardando resposta da request nao autenticada da API</h1>
          </div>
        )}
        {renderError && (
          <div>
            <h1>Ocorreu algum erro na requisição da API</h1>
          </div>
        )}
      </div>
    </Column>
  )
}

export default ListAPI
