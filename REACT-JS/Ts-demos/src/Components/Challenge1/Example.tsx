import type { ExampleInfo } from './types'

type ExampleInfoPRops = {
    exinfos: ExampleInfo;
}

function Example({exinfos}: ExampleInfoPRops) {
  return (
    <div>
        <h2>Example test</h2>
        <p>Religion: {exinfos.religion}</p>
        <p>Location: {exinfos.location}</p>
    </div>
  )
}

export default Example