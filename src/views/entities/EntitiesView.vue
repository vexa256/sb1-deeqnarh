<script setup>
import { ref, onMounted } from 'vue'
import EntityList from '@/components/entities/EntityList.vue'
import EntityFilters from '@/components/entities/EntityFilters.vue'
import EntityActions from '@/components/entities/EntityActions.vue'
import EntityStats from '@/components/entities/EntityStats.vue'

const selectedEntities = ref([])
const searchQuery = ref('')
const showCreateModal = ref(false)

// Mock data for now - will be replaced with real data later
const entities = ref([
  {
    id: 1,
    EntityID: 'ENT-0001',
    Entity: 'Project Alpha',
    EntityProjectDetails: 'A flagship enterprise project focused on sustainable development.'
  },
  // ... more entities
])
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] bg-base-100">
    <!-- Header Section -->
    <div class="border-b">
      <div class="px-6 py-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-2xl font-bold">Entities</h1>
            <p class="text-base-content/70">Manage and monitor your organization's entities</p>
          </div>
          <EntityActions 
            :selected-count="selectedEntities.length"
            @create="showCreateModal = true"
          />
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="px-6 py-6">
      <EntityStats />
    </div>

    <!-- Filters and Table -->
    <div class="px-6 pb-6">
      <div class="card bg-base-100 shadow-sm">
        <div class="card-body p-0">
          <!-- Filters -->
          <EntityFilters v-model:search="searchQuery" />

          <!-- Table -->
          <EntityList
            v-model:selected="selectedEntities"
            :entities="entities"
            :search-query="searchQuery"
          />
        </div>
      </div>
    </div>
  </div>
</template>