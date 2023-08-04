<template>
<router-link to="/add">
<button 
class="btn btn-info>
เพิ่มผู้ใช้งาน
</button>
</router-link>

  <table class="table w-full">
    <thead>
      <tr>
      
        <th>Pic</th>
        <th>Name</th>
        <th>Role</th>
        <th>Detail</th>
        <th>Tools</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  
      <tr v-for="(user, index) in 10">

        <th> {{ index+1 }} </th>

        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="/src/assets/admin.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
       
          </div>
        </td>
        <td>
          Mook
        </td>
        <td>
          Superadmin
        </td>
        <td>
          <button class="btn btn-outline btn-primary btn-sm">รายละเอียด</button>
        </td>
        <td>
        
          <button class="btn btn-success btn-sm mx-2">แก้ไข</button>
          <button class="btn btn-error btn-sm">ลบ</button>
        </td>
      </tr>

    </tbody>
  </table>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref({})

const fetch_user = async () => {
  await axios.get(`${import.meta.env.VITE_API}/users`)
  .then((response) => {
      console.log(response)
  }).catch((err) => {
      console.log(err)
  })
}

onMounted(() => fetch_users())

</script>


<style lang="scss" scoped>

</style>