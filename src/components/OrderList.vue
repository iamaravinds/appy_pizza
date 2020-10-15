<template>
<b-container fluid>
    <!-- View Badge -->
    <div @click="toggleView">
        <b-badge variant="primary">{{oldView}}</b-badge>
    </div>
  <b-row class="order-list">
    <b-col
        :sm="views.sm"
        :md="views.md"
        :lg="views.lg"
        v-for="item in items"
        :key="item.orderId"
        >
        <!-- This component renders the every order item -->
        <OrderItem
        :itemData="item"
        :view="view"
        @update-order="updateOrder"
        />
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue';

export default {
  name: 'OrderList',
  components: {
    OrderItem,
  },
  computed: {
    // Returns the order list as an array
    itemList() {
      if (this.items.length > 0) {
        return this.items;
      } return [];
    },
    // Changes on view layout is controlled here
    views() {
      if (this.view === 'List') {
        return {
          sm: 12,
          md: 12,
          lg: 12,

        };
      } return {
        sm: 12,
        md: 6,
        lg: 3,
      };
    },
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    updateMainOrder: {
      type: Function,
    },
  },
  data() {
    return {
      view: 'List',
      oldView: 'Grid',
      currentVariant: 'success',
      oldVariant: 'default',
    };
  },
  methods: {
    // This Toggles the view
    toggleView() {
      if (this.view === 'List') {
        this.view = 'Grid';
        this.oldView = 'List';
      } else {
        this.view = 'List';
        this.oldView = 'Grid';
      }
    },
    // Emits the changes to the parent to update the order status
    updateOrder(e) {
      this.$emit('update-main-order', e);
    },
  },
};
</script>

<style lang="scss">
// .order-list {
//     display: grid;
// }
</style>
