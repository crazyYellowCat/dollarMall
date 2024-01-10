import type { AddressItem } from "@/types/address";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAdressStore = defineStore('address', () => {
    const selectAddress = ref<AddressItem>()
    const changeSelectAdress = (val: AddressItem) => {
        selectAddress.value = val
    }
    return {
        selectAddress,
        changeSelectAdress
    }
})