import { defineComponent, ref } from '@vue-mini/core';
// import $api from '../../api/index'

// // 调用
// $api.userApi.getUserInfo({ username: 'demo', password: '123456' }).then((res) => {
//     if (res.code === 200) {
//       userStore.setUserInfo(res.data.userInfo)
//     }
// })
type SearchQuery = {
  dateRange: string[]
  number: string | undefined
  budget: string | undefined
  activityId: string
}
interface ActiveData {
  id?: string
  date: string
  activityId: string
  address: string
  name: string
  number: number | undefined
  budget: number | undefined
  reimbursement?: number | boolean // 0 未报销 1 已报销
  detail?: string
  essay?: string
  leader: string
  userId: string
  index?: string | number
}
defineComponent({
  methods: {
    onLoad() {
      this.setData({
        inputChange: (e: any) => {
          console.log('inputChange', e);
        },
      })
    },
  },
  setup() {
    const tableData = ref<Array<ActiveData>>([])
    const currentPage = ref(1)
    const pageSize = ref(20)
    const total = ref(0)
    const loading = ref(false)
    const searchQuery = ref({ dateRange: [], number: undefined, budget: undefined, activityId: '' })
    const search = () => {
      loading.value = true
      wx.request<any>({
        url: "http://120.26.199.32:3000/activities/list",
        method: "POST",
        data: {
          startDate: searchQuery.value.dateRange[0],
          endDate: searchQuery.value.dateRange[1],
          number: searchQuery.value.number,
          budget: searchQuery.value.budget,
          activityId: searchQuery.value.activityId,
          pageNum: currentPage.value,
          pageSize: pageSize.value,
        },
        success: (res) => {
          console.log(res);
          const data = res.data.data
          total.value = data.total
          tableData.value = data.list.map((el: ActiveData, i: number) => {
            el.index = el.activityId === '合计' ? '合计' : i
            el.detail = el.detail ? JSON.parse(el.detail) : []
            el.reimbursement = Boolean(el.reimbursement)
            return el
          })
        },
        complete: () => {
          loading.value = false
        }
      })
    }
    search() // 获取数据

    const greeting = ref('欢迎使用 Vue Mini');
    const bg = ref('bg-[#3532ff] h-[323px] text-[#fafafa] flex items-center');
    // const inputChange = (e: any) => {
    //   console.log('inputChange', e);
    // }
    const selectResult = (e: any) => {
      if (e.type === "clear") {
        searchQuery.value.activityId = ''
      } else {
        searchQuery.value.activityId = e.detail.value
      }
      console.log('selectResult', e);
    }
    return {
      searchQuery,
      tableData,
      greeting,
      bg,
      search,
      selectResult,
      // inputChange,
    };
  }
});
