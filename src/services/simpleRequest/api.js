import { instance } from '../common.js'

const requestUserRepos = () => instance.get('users/ghblue/repos')

export default requestUserRepos
