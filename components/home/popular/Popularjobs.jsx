import {useState} from 'react'
import { View, Text  , TouchableOpacity , FlatList , ActivityIndicator} from 'react-native'
import { useReducer } from 'react'


import styles from './popularjobs.style'
import { COLORS  , SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRoute } from '@react-navigation/native'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {

  const router = useRoute()

  const{data , isLoading , error} = useFetch(
    'search' , {
      query:'React developer',
      num_pages:1
    }
  )

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
    
      {isLoading ? (
        <ActivityIndicator size="large"  colors={COLORS.primary}/>
       ) : error ? (
        <Text>Something Went Wrong</Text>
       ):(
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard item={item} />
          )}
          keyExtractor={(item) => item.toString()} // Use toString() to ensure a string key
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />

       )}

      </View>
    </View>
  )
}

export default Popularjobs