<template>
  <v-app class="bg-color">
    <v-container fluid grid-list-sm>
    <v-layout row wrap fill-height>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="blue-grey" dark tile flat>
              <v-card-text>{{ lorem }}1</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text>{{ lorem }}2</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout column wrap>
          <v-flex d-flex>
            <v-card color="indigo lighten-2" dark tile flat>
              <v-card-text>{{ lorem.slice(0, 70) }}3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
              >
                <v-card
                  color="amber lighten-2"
                  tile
                  flat
                >
                  <v-card-text>{{ lorem.slice(0, 40) }}4</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text>{{ lorem.slice(0, 90) }}5</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text>{{ lorem.slice(0, 100) }}6</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>12</v-layout>
  </v-container>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
