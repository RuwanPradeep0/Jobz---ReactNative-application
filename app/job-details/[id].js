import React ,{useEffect}from 'react'
import { View, Text } from 'react-native'
import { useSearchParams } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import useFetch from '../../hook/useFetch';

const jobDetails = () => {

    const route = useRoute();
  
    // Access the job ID from route params
    const params = route.params;
    console.log(params)

    const {data , isLoading , error , refetch} = useFetch('Job-details' , {job_id : params.id})
    

  useEffect(() => {
    // Fetch data when the component mounts or when params.id changes
    refetch();
  }, [params.id]);

    console.log(data)
  return (
    <View>
        <Text>jobId</Text>
    </View>
  )
}

export default jobDetails
