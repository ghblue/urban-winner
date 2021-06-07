import { instance } from '../common.js'

const requestUserRepos = () => instance.get('orgs/naveteam/teams')

export default requestUserRepos
