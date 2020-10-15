<template>
  <div class="order-item">
    <div class="status">
        <b-badge pill size="sm" :variant="buttonColor" :disabled="disabled" class="status-badge">
            {{ itemData.status }}
        </b-badge>
    </div>
    <b-col v-if="itemData" class="item-data">
      <b-col>Order No: {{ itemData.orderId }}</b-col>
      <b-col>Customer: {{ itemData.customerName }}</b-col>
      <b-col>Items: {{ itemData.itemsCount }}</b-col>
      <b-col>Amount: ${{ itemData.totalAmount }}</b-col>
      <button class="process-button"
      :class="{'disable-button':disabled}"
      v-b-tooltip.hover
      :title="orderTooltip"
      @click="processOrder(itemData)"
      >
        Process
      </button>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  computed: {
    item() {
      if (this.itemData) {
        return this.itemData;
      }
      return null;
    },
    buttonColor() {
      if (this.itemData) {
        if (this.itemData.status === 'RECEIVED') return 'success';
        if (this.itemData.status === 'PREPARING') return 'warning';
        return 'primary';
      } return null;
    },
    disabled() {
      if (this.itemData) {
        if (this.itemData.status === 'SERVE') return true;
        return false;
      } return true;
    },
    orderTooltip() {
      if (this.itemData) {
        if (this.itemData.status === 'SERVE') return 'Cannot Process';
        return 'Process Order';
      } return 'null';
    },
  },
  props: {
    itemData: {
      type: Object,
      default() {
        return null;
      },
    },
    view: {
      type: String,
      default: 'List',
    },
  },
  methods: {
    // Process the click operation
    processOrder(data) {
      let toStatus = null;
      if (data.status === 'RECEIVED') toStatus = 'PREPARING';
      else if (data.status === 'PREPARING') toStatus = 'SERVE';
      else if (data.status === 'SERVE') {
        alert('Cannot Process Processed Orders');
        return null;
      }
      const updateObj = {
        orderId: data.orderId,
        toStatus,
      };
      this.$emit('update-order', updateObj);
      return null;
    },

  },
};
</script>

<style lang="scss">
.order-item {
  margin: 5px;
  padding: 5px;
  border: 2px solid gold;
  border-radius: 15px;
    .status{
        cursor: pointer;
        margin-top: -15px;
        margin-left: -10px;
    }
    .item-data{
        .process-button{
            margin-left: 8px;
            width: 80px;
            border: none;
            border-radius: 15px;
            background: #28a745;
            color: white;
        }
    }

    .disable-button{
        cursor:not-allowed;
        background:#dc3545;
    }
}
</style>
