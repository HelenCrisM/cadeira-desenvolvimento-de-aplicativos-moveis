import { View } from 'react-native'
import { List, Search } from './src/components'
import * as data from './src/data'



export default function App() {
  return (
    <View>
      <Search />
      <List data={[...data.data2, ...data.data2]} horizontal />
      <List data={data.data1} />
    </View>
  )
}

