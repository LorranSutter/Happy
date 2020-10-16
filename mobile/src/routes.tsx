import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanageMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
                <Screen
                    name='OrphanagesMap'
                    component={OrphanageMap}
                />

                <Screen
                    name='OrphanageDetails'
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title='Orphanage' />
                    }}
                />

                <Screen
                    name='SelectMapPosition'
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Select on the map' />
                    }}
                />

                <Screen
                    name='OrphanageData'
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Inform the data' />
                    }}
                />

            </Navigator>
        </NavigationContainer>
    )
}