<template>
  <b-container class="orders">
    <h1>Pizza Orders</h1>
    <OrderList :items="items" @update-main-order="updateMainOrder" />
  </b-container>
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import dumyData from '../data/OrderData.json';

export default {
  name: 'Orders',
  components: {
    OrderList,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    updateMainOrder(updateObj) {
      this.items.forEach((element, index) => {
        if (this.items[index].orderId === updateObj.orderId) {
          this.items[index].status = updateObj.toStatus;
          alert('Order Processed Successfully!');
        }
      });
    },
  },
  mounted() {
    if (this.items.length === 0) {
      this.items = dumyData;
    }
  },
};
</script>

<style scoped>

</style>
