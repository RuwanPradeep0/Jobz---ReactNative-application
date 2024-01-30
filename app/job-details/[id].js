import { View,Text } from 'react-native'
import { useCallback , useState } from 'react'
import { Specifics, Company , JobAbout , JobFooter , JobTabs , ScreenHeaderBtn } from '../../components'
import {COLORS , icons , SIZES} from '../../constants'
import useFetch from '../../hook/useFetch'
import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context'
import { RefreshControl, ScrollView } from 'react-native-web'

const jobDetails = () => {

    const params = useSearchParams;
    const router = useRouter()

    // const {data , isLoading , error , refetch} = useFetch('job-details' , {
    //     job_id : params.id
    // })

  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options = {{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible: false,
            headerLeft:()=>(
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension="60"
                    handlePress={() => router.back()}
                    />
            ),

            headerRight:()=>(
                <ScreenHeaderBtn
                    iconUrl={icons.share}
                    dimension="60"
                    
                    />
            ),

            headerTitle: ""
        }}
        
        />

        <>
        <ScrollView showsVerticalScollIndicator = {false}
            refreshControl= {<RefreshControl refreshing={refreshing} onRefresh = {onRefresh}/>}
        >

        </ScrollView></>


    </SafeAreaView>
  )
}

export default jobDetails
