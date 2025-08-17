import React, {setState} from 'react';

import { ref, onMounted } from 'vue';
import { fetchServices } from '../data/services';
import {getUserData} from '...'
import type { Service, UserDescription } from '../types';

// Fetch services and ensure data structure
// onMounted(async () => {
//   services.value = await fetchServices();
//   console.log('Fetched services:', services.value);
//   loading.value = false;
// });

const servicesData = [
  { id: 1, name: 'Standard Haircut', duration: '30 min', price: '$30' },
  { id: 2, name: 'Beard Trim', duration: '15 min', price: '$15' },
  { id: 3, name: 'Hair Wash & Style', duration: '45 min', price: '$45' },
  { id: 4, name: 'Kids Haircut', duration: '25 min', price: '$25' },
];

export const serviceSelection = () => {
    const emit = defineEmits(['next', 'updateServices']);

    const services = ref<Service[]>([]);
    const loading = ref(true);
    const userDescription = ref<UserDescription>({
    description:""
    });

    const toggleService = (service: Service) => {
    service.selected = !service.selected;
    emit('updateServices', services.value.filter((s) => s.selected));
    };

    const handleNext = () => {
    if (services.value.some((service) => service.selected)) {
        emit('next');
    }
    };


}


export default const selectService = () => {
    return (
        <div class="service-selection">
            <h2>Select Services</h2>
            <div v-if="loading" class="loading-indicator">Loading services...</div>
            <div v-else class="services-grid">
            <div
                v-for="service in services"
                :key="service.id"
                class="service-card"
                :class="{ selected: service.selected }"
                @click="toggleService(service)"
            >
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
                <p>Duration: {{ service.duration }} min</p>
                <p>Price: ${{ service.price }}</p>
            </div>
            </div>
            <div class="service-description">
            <textarea 
            v-model="userDescription.description" 
            placeholder="Please describe about your requests (max. 500 characters)" 
            size="large"
            style="resize: true"
            variant="filled"
            rows="6" cols="30" 
            :maxlength="500"
            ></textarea>
            </div>
            <div class="button-container">
            <button
                @click="handleNext"
                :disabled="!services.length || !services.some((service) => service.selected)"
                class="next-button"
            >
                Book Now!
            </button>
            </div>
        </div>

    )
}
  