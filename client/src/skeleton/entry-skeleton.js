import Vue from 'vue';
import Skeleton1 from '@/skeleton/skeleton1.vue';
import Skeleton2 from '@/skeleton/skeleton2.vue';

export default new Vue({
    components: {
        Skeleton1,
        Skeleton2,
    },
    // render: h => h(Skeleton1, Skeleton2),
    template: `
       <div style='height: 100%;'>
           <skeleton1 id="skeleton1" style="display:block"/>
           <skeleton2 id="skeleton2" style="display:block"/>
       </div>
    `
});
