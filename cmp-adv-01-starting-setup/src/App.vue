<template>
  <div>
    <the-header></the-header>
    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </CourseGoals> -->

    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>

    <KeepAlive>
      <component :is="selectedComponent"></component>
    </KeepAlive>
    <!-- <ActiveGoals />
    <ManageGoals /> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "ActiveGoals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
