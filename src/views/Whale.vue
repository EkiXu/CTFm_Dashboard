<template>
  <v-container id="user-profile" fluid category="section">
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col cols="12" md="8">
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Whale Setting</div>
            <div class="subtitle-1 font-weight-light">Configure Dynamic Challenge Setting</div>
          </template>

          <v-container>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="whaleConfig.docker_api_url" label="Docker API URL" />
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field v-model="whaleConfig.frp_api_host" label="Frp API Host" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field v-model="whaleConfig.frp_api_port" label="Frp API Port" />
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="whaleConfig.frp_http_domain_suffix"
                    label="Frp HTTP Domain Suffix"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field v-model="whaleConfig.frp_http_port" label="Frp HTTP Port" />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="whaleConfig.frp_direct_ip_address"
                    label="Frp Direct IP address"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="whaleConfig.frp_minimum_port"
                    label="Frp Direct Minimum Port"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="whaleConfig.frp_maximum_port"
                    label="Frp Direct Maximum Port"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="whaleConfig.frp_config_template"
                    label="Frp Config Template"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="whaleConfig.max_container_amount"
                    label="Max Container Amount"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="whaleConfig.max_renew_time" label="Max Renew Time" />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="whaleConfig.docker_auto_connect_containers"
                    label="Docker Auto Connect Containers"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="whaleConfig.docker_dns_setting"
                    label="Docker Dns Setting"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="whaleConfig.docker_auto_connect_network"
                    label="Docker Auto Connect Network"
                  />
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="whaleConfig.docker_multi_container_network_subnet"
                    label="Docker Multi Container Network Subnet"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="whaleConfig.docker_multi_container_network_subnet_new_prefi"
                    label="Docker Multi Container Network Subnet New Prefix"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="whaleConfig.docker_container_timeout"
                    label="Docker Container Timeout"
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" @click="updateWhaleConfig">submit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import {
  getWhaleConfigAPI,
  updateWhaleConfigAPI,
} from "@/api/whale";
export default {
  components: {
    BaseCard,
  },
  data: () => ({
    whaleConfig: {
      docker_api_url: "",
      frp_api_host: "",
      frp_api_port: 0,
      frp_http_domain_suffix: "",
      frp_http_port: 0,
      frp_direct_ip_address: "",
      frp_minimum_port: 0,
      frp_maximum_port: 0,
      max_container_amount: 0,
      max_renew_time: 0,
      frp_config_template: "",
      docker_auto_connect_containers: "",
      docker_auto_connect_network: "",
      docker_dns_setting: "",
      docker_multi_container_network_subnet: "",
      docker_multi_container_network_subnet_new_prefix: "",
      docker_container_timeout: 0
    },
    rules: {
      nameRules: [v => !!v || "Challenge Title is required"],
      pointsRules: [
        v => !!v || "Points is required",
        v => /^[0-9]*$/.test(v) || "Points must be valid"
      ],
      portRules: [
        v => !!v || "Ports is required",
        v => /^[0-9]*$/.test(v) || "Ports must be valid",
        v => (0 < v && v < 66536) || "Ports must between 1~66535"
      ],
      flagRules: [
        v => !!v || "Flag is required"
        //v=> /^flag{.*}$/.test(v) || 'Flag must be valid'
      ]
    }
  }),

  computed: {},

  watch: {},

  async created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.getWhaleConfig()  
    },
    async getWhaleConfig(){
      const res = await getWhaleConfigAPI()
      const RemoteConfig = res.data
      for(let key in RemoteConfig){
        this.whaleConfig[key] = RemoteConfig[key]
      }
    },
    async updateWhaleConfig(){
      const res = await updateWhaleConfigAPI(this.whaleConfig)
      const RemoteConfig = res.data
      for(let key in RemoteConfig){
        this.whaleConfig[key] = RemoteConfig[key]
      }
    },
  }
};
</script>

<style>
</style>
