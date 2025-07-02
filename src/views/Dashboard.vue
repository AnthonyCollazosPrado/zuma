<template>
    <Breadcrumb :home="home" :model="items" />
    <div class="mb-10 rounded-3xl bg-[#6790FF] relative overflow-hidden">
        <div class="px-10 py-20 relative superior inline-block">
            <h2 class="m-0 text-[#171717]">Bienvenido [Joaquin] a tu perfil del inversionista</h2>
        </div>
        <div class="mask absolute -top-14 -right-8">
            <img src="/imagenes/zuma/imagen-1.png" alt="Logo Zuma"
                class="inline-block w-96 hover:scale-110 transition duration-100 ease-in" />
        </div>
    </div>

    <StatsWidget />

    <div class="p-10 my-10 rounded-3xl bg-[#F0F1F9]">
        <div class="grid grid-cols-8 gap-0">
            <div class="col-span-8 lg:col-span-4">
                <h3 class="m-0 text-[#171717]">Mi billetera</h3>
                <p class="m-0 text-[#171717]">Puedes utilizar ambas monedas al momento de hacer la inversión.</p>
            </div>
            <div class="col-span-8 lg:col-span-4 text-end">
                <button type="button"
                    class="text-[#171717] bg-white focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                    <img src="/imagenes/zuma/pen.png" alt="Logo Zuma" class="inline-block me-2" width="20" />
                    <span class="inline-block align-middle">PEN</span>
                </button>
                <button type="button"
                    class="text-[#171717] bg-white focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                    <img src="/imagenes/zuma/usd.png" alt="Logo Zuma" class="inline-block me-2" width="20" />
                    <span class="inline-block align-middle">USD</span>
                </button>
                <button type="button"
                    class="text-white bg-[#171717] focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                    <i class="pi pi-plus inline-block align-middle me-2"></i>
                    <span class="inline-block align-middle">Calcular</span>
                </button>
                <button type="button"
                    class="text-[#171717] border-button-black focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 transition duration-100 ease-in">
                    <i class="pi pi-minus inline-block align-middle me-2"></i>
                    <span class="inline-block align-middle">Retiro</span>
                </button>
            </div>
        </div>
    </div>




    <div class="p-10 my-10 rounded-3xl bg-[#F0F1F9]">

        <h3 class="m-0 text-[#171717]">Bolsa de entidades</h3>
        <p class="m-0 text-[#171717] pb-10">Aquí puedes consultar y hacer una simulación los cambios de la bolsa
            de entidades. Solo, ingresa el monto a invertir, elije el tipo de moneda y realiza la consulta.
            Luego presiona el botón calculadora para revisar los detalles.</p>

        <form class="">
            <div class="grid grid-cols-6 gap-0">
                <div class="col-span-6 lg:col-span-1 mb-3">
                    <label class="text-[#171717] font-bold md:text-left mb-1 md:mb-0 pr-4 py-3 static lg:absolute"
                        for="inline-full-name">
                        Monto a invertir
                    </label>
                </div>
                <div class="col-span-3 lg:col-span-3 pe-3">
                    <InputNumber id="amount" v-model="simulationForm.amount" mode="currency" currency="PEN"
                        locale="es-PE" :min="100" :max="1000000" placeholder="Ingrese el monto" @input="onAmountChange"
                        class="!w-full general" />
                </div>
                <div class="col-span-3 lg:col-span-2">
                    <Button label="Show" @click="simulateByAmount"
                        class="!border-none !w-full !text-white !bg-[#171717] hover:!bg-[#6790FF] focus:!border-none focus:!bg-[#FF4929] !font-bold !rounded-3xl !px-5 !py-3 !me-3 !transition !duration-100 !ease-in">
                        <i class="pi pi-calculator inline-block align-middle me-2"></i>
                        <span class="inline-block align-middle">Calcular</span>
                    </Button>


                    <!-- <Button label="Show" @click="visible = true"
                        class="!border-none !w-full !text-white !bg-[#171717] hover:!bg-[#6790FF] focus:!border-none focus:!bg-[#FF4929] !font-bold !rounded-3xl !px-5 !py-3 !me-3 !transition !duration-100 !ease-in">
                        <i class="pi pi-calculator inline-block align-middle me-2"></i>
                        <span class="inline-block align-middle">Calcular</span>
                    </Button> -->
                </div>



            </div>
        </form>

        <div class="relative overflow-x-auto rounded-3xl mt-10">
            <table class="w-full text-left rtl:text-right text-gray-500">
                <thead class="text-[#171717] border-b border-[#D9D9D9] bg-gray-50">
                    <tr>
                        <th scope="col" class="px-5 py-3">Entidad</th>
                        <th scope="col" class="px-5 py-2">3 m.</th>
                        <th scope="col" class="px-5 py-2">6 m.</th>
                        <th scope="col" class="px-5 py-2">9 m.</th>
                        <th scope="col" class="px-5 py-2">12 m.</th>
                        <th scope="col" class="px-5 py-2">18 m.</th>
                        <th scope="col" class="px-5 py-2">24 m.</th>
                        <th scope="col" class="px-5 py-2">36 m.</th>
                        <th scope="col" class="px-5 py-2">48 m.</th>
                        <th scope="col" class="px-5 py-2">60 m.</th>
                    </tr>
                </thead>
                <tbody>



                    <tr v-for="item in simulationItems" :key="item.id"
                        class="odd:bg-white even:bg-gray-50 text-[#171717]">
                        <th scope="row" class="px-5 py-3 font-medium">
                            {{ item.nombre }}
                        </th>
                        <td v-for="subitem in item.tea" :key="subitem.id" class="px-5 py-2">
                            {{ subitem[1] }}
                            <Button v-if="subitem[1] != ''"
                                @click="simulationDetaill(item.nombre, subitem[0], subitem[1], subitem[2], subitem[3])"
                                icon="pi pi-calculator" aria-label="Save" variant="link" class="!text-black" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>







        <Card class="mb-4">
            <template #title>
                <div class="flex items-center">
                    <i class="pi pi-calendar mr-2 text-primary"></i>
                    Configurar Cronograma
                </div>
            </template>
            <template #content>
                <div class="flex flex-wrap gap-3 items-end">
                    <div class="flex flex-col flex-1 min-w-[200px]">
                        <label class="block text-900 font-medium mb-2">Frecuencia de Pago</label>
                        <Dropdown v-model="scheduleForm.paymentFrequencyId" :options="paymentFrequencies"
                            option-label="nombre" option-value="id" placeholder="Seleccionar frecuencia" class="w-full"
                            @change="generateSchedule" />
                    </div>
                    <div class="flex flex-col flex-1 min-w-[200px]">
                        <label class="block text-900 font-medium mb-2">Fecha de Inicio</label>
                        <Calendar v-model="scheduleForm.startDate" date-format="dd/mm/yy"
                            placeholder="Seleccionar fecha" class="w-full" :min-date="new Date()"
                            @date-select="generateSchedule" />
                    </div>
                    <div class="flex">
                        <Button label="Generar Cronograma" icon="pi pi-table" :loading="loading.schedule"
                            :disabled="!scheduleForm.paymentFrequencyId" @click="generateSchedule" />
                    </div>
                </div>
            </template>
        </Card>



        <DataTable :value="scheduleData.cronograma" :paginator="true" :rows="10" size="small" :scrollable="true"
            scroll-height="400px">
            <Column field="numero_pago" header="Mes" class="text-center" sortable style="min-width: 4rem" />
            <Column field="fecha_cronograma" header="Cronograma" sortable style="min-width: 8rem">
                <template #body="slotProps">
                    <span>{{ slotProps.data.fecha_cronograma }}</span>
                </template>
            </Column>
            <Column field="fecha_pago" header="Fecha de Pago" sortable style="min-width: 9rem">
                <template #body="slotProps">
                    <span>{{ slotProps.data.fecha_pago ?? '-' }}</span>
                </template>
            </Column>
            <Column field="dias_periodo" header="Días" class="text-center" sortable style="min-width: 4rem">
                <template #body="slotProps">
                    <span>{{ slotProps.data.dias_periodo ?? '-' }}</span>
                </template>
            </Column>
            <Column field="monto_base" header="Monto base" class="text-right" sortable style="min-width: 8rem">
                <template #body="slotProps">
                    <span class="text-900">S/ {{ formatMoney(slotProps.data.monto_base) }}</span>
                </template>
            </Column>
            <Column field="interes_bruto" header="Interés base (S/.)" class="text-right" sortable
                style="min-width: 10rem">
                <template #body="slotProps">
                    <span v-if="slotProps.data.interes_bruto > 0" class="text-green-600">
                        S/ {{ formatMoney(slotProps.data.interes_bruto) }}
                    </span>
                    <span v-else>-</span>
                </template>
            </Column>
            <Column field="impuesto_2da" header="Impuesto 2da categoría" class="text-right" sortable
                style="min-width: 14rem">
                <template #body="slotProps">
                    <span v-if="slotProps.data.impuesto_2da > 0" class="text-red-500">
                        S/ {{ formatMoney(slotProps.data.impuesto_2da) }}
                    </span>
                    <span v-else>-</span>
                </template>
            </Column>
            <Column field="interes_neto" header="Interés a depositar" sortable style="min-width: 11rem">
                <template #body="slotProps">
                    <span v-if="slotProps.data.interes_neto > 0" class="text-blue-600 font-semibold">
                        S/ {{ formatMoney(slotProps.data.interes_neto) }}
                    </span>
                    <span v-else>-</span>
                </template>
            </Column>
            <Column field="devolucion_capital" header="Devolución capital" sortable style="min-width: 11rem">
                <template #body="slotProps">
                    <span v-if="slotProps.data.devolucion_capital > 0" class="text-orange-600 font-semibold">
                        S/ {{ formatMoney(slotProps.data.devolucion_capital) }}
                    </span>
                    <span v-else>-</span>
                </template>
            </Column>
            <Column field="saldo_capital" header="Saldo de capital" sortable style="min-width: 10rem">
                <template #body="slotProps">
                    <span class="text-900">S/ {{ formatMoney(slotProps.data.saldo_capital) }}</span>
                </template>
            </Column>
            <Column field="total_a_depositar" header="Total a depositar" sortable style="min-width: 10rem">
                <template #body="slotProps">
                    <span v-if="slotProps.data.total_a_depositar > 0" class="font-bold text-primary">
                        S/ {{ formatMoney(slotProps.data.total_a_depositar) }}
                    </span>
                    <span v-else>-</span>
                </template>
            </Column>
        </DataTable>

































































        <Dialog v-model:visible="detaill" modal header="Entidad" class="!text-[#171717]" :style="{ width: '80rem' }">
            <h2 class="text-[#171717] block mb-8">{{ chosenItem.nombre }}</h2>
            <h3 class="text-[#171717]">Monto invertido: S/ {{ simulationForm.amount }}</h3>
            <div class="relative overflow-x-auto rounded-3xl mt-10">
                <table class="w-full text-left rtl:text-right text-gray-500">
                    <thead class="text-[#171717] border-b border-[#D9D9D9] bg-gray-50">
                        <tr>
                            <th scope="col" class="px-5 py-3">Tasa</th>
                            <th scope="col" class="px-5 py-3">Plazo</th>
                            <th scope="col" class="px-5 py-3">Interés ganado</th>
                            <!-- <th scope="col" class="px-5 py-3">Retorno total</th> -->
                            <th scope="col" class="px-5 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="odd:bg-white even:bg-gray-50 text-[#171717]">
                            <th scope="row" class="px-5 py-3 font-medium">
                                {{ chosenItem.tea }}
                            </th>
                            <td class="px-5 py-2">
                                {{ chosenItem.plazo }} días
                            </td>
                            <td class="px-5 py-2">
                                {{ chosenItem.retorno }}
                            </td>
                            <!-- <td class="px-5 py-2">
                                
                            </td> -->
                            <td class="px-5 py-2">
                                <button type="button"
                                    class="text-white bg-[#171717] focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                                    <i class="pi pi-eye inline-block align-middle me-2"></i>
                                    <span class="inline-block align-middle">Cronograma</span>
                                </button>
                                <button type="button"
                                    class="text-[#171717] border-button-black focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 transition duration-100 ease-in">
                                    <i class="pi pi-file-excel inline-block align-middle me-2"></i>
                                    <span class="inline-block align-middle">Excel</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




































            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="detaill = false"></Button>
                <Button type="button" label="Save" @click="detaill = false"></Button>
            </div>
        </Dialog>
    </div>
</template>



<script setup>
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
import { simulationService } from '@/services/simulationService';
import { useToast } from "primevue/usetoast";
import { computed, onMounted, ref } from "vue";

const toast = useToast();
const detaill = ref(false);
const home = ref({ icon: 'pi pi-home' });
const items = ref([{ label: 'Mi billetera' }]);

const simulationItems = ref([])
const chosenItem = ref({
    id: 37,
    nombre: '',
    tea: '',
    plazo: '',
    retorno: ''
})

/*
const dialog = useDialog();
const showProducts = () => {
    alert();
    dialog.open(ProductListDemo, {});
}
*/

const loading = ref({
    simulate: false,
    schedule: false,
    compare: false,
    export: false
});
// Datos
const simulationResults = ref([])
const paymentFrequencies = ref([])
//const selectedRate = ref(null)
// const scheduleData = ref(null)
const selectedRate = ref('')
const scheduleData = ref({
    cronograma: ''
})
const comparisonResults = ref([])

const compareForm = ref({
    selectedRates: [],
    paymentFrequencyId: null
})

// Formularios
const simulationForm = ref({
    amount: ''
})

const scheduleForm = ref({
    paymentFrequencyId: null,
    startDate: new Date(),
    taxRate: 0.05
})



const loadPaymentFrequencies = async () => {
    try {
        //const response = await axios.get('/api/investments/payment-frequencies')
        const response = await simulationService.getPaymentFrecuencies()
        if (response.data.success) {
            paymentFrequencies.value = response.data.data
        }
    } catch (error) {
        console.error('Error cargando frecuencias:', error)
    }
}

const formatDate = (date) => {
    if (!date) return null
    return date.toISOString().split('T')[0]
}

const generateSchedule = async () => {
    //if (!selectedRate.value || !scheduleForm.value.paymentFrequencyId) {
    if (!scheduleForm.value.paymentFrequencyId) {
        toast.add({
            severity: 'warn',
            summary: 'Atención',
            detail: 'Seleccione una tasa y configure la frecuencia de pago',
            life: 3000
        })
        return
    }

    loading.value.schedule = true

    try {
        //const response = await axios.post('/api/investments/generate-schedule', {
        const response = await simulationService.getGenerateSchedule({
            //rate_id: selectedRate.value.id,
            rate_id: chosenItem.value.id,
            amount: simulationForm.value.amount,
            payment_frequency_id: scheduleForm.value.paymentFrequencyId,
            start_date: scheduleForm.value.startDate ? formatDate(scheduleForm.value.startDate) : null,
            tax_rate: scheduleForm.value.taxRate
        })

        if (response.data.success) {
            scheduleData.value = response.data.data
            activeTab.value = 1 // Cambiar al tab de cronograma

            toast.add({
                severity: 'success',
                summary: 'Cronograma Generado',
                detail: 'Se ha generado el cronograma de pagos',
                life: 3000
            })
        }
    } catch (error) {
        console.error('Error generando cronograma:', error)
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.response?.data?.message || 'Error al generar cronograma',
            life: 5000
        })
    } finally {
        loading.value.schedule = false
    }
}






// Event handlers
const simulationDetaill = (nombre, id, tea, plazo, retorno) => {
    chosenItem.value.nombre = nombre;
    chosenItem.value.id = id;
    chosenItem.value.tea = tea;
    chosenItem.value.plazo = plazo;
    chosenItem.value.retorno = retorno;
    detaill.value = true;
}

const onAmountChange = () => {
    if (!simulationForm.value.amount) {
        simulationResults.value = []
        selectedRate.value = null
        scheduleData.value = null
        comparisonResults.value = []
    }
}

const formatMoney = (amount) => {
    if (!amount) return '0.00'
    return new Intl.NumberFormat('es-PE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount)
}

const simulateByAmount = async () => {
    if (!simulationForm.value.amount || simulationForm.value.amount < 100) {
        toast.add({
            severity: 'warn',
            summary: 'Atención',
            detail: 'Ingrese un monto válido (mínimo S/ 100)',
            life: 3000
        })
        return
    }
    loading.value.simulate = true
    try {
        const response = await simulationService.getSimulateByAmount({
            amount: simulationForm.value.amount
        });
        if (response.data.success) {
            simulationResults.value = response.data.data
            selectedRate.value = null
            scheduleData.value = null
            comparisonResults.value = []

            toast.add({
                severity: 'success',
                summary: 'Éxito',
                detail: `Se encontraron ${simulationResults.value.length} opciones`,
                life: 3000
            })

            simulationResponse.value
        }
    } catch (error) {
        console.error('Error simulando:', error)
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.response?.data?.message || 'Error al buscar tasas',
            life: 5000
        })
    } finally {
        loading.value.simulate = false
    }
}

const simulationResponse = computed(() => {
    let total = 0
    let id = 0
    simulationItems.value = []
    simulationResults.value.forEach(coop => {
        let datos = {}
        datos.id = id
        datos.nombre = coop.cooperativa
        coop.tipos_tasa.forEach(res => {
            if (res.tipo_tasa == 'TEA') {
                let arreglo = []
                if (res.tasas.length == 9) {
                    for (let i = res.tasas.length - 1; i >= 0; i--) {
                        arreglo.push([res.tasas[i].id, res.tasas[i].TEA, res.tasas[i].plazo_dias, res.tasas[i].retorno])
                        datos.tea = arreglo
                    }
                } else {
                    arreglo.push(['', '', '', ''], ['', '', '', ''], ['', '', '', ''])
                    for (let i = res.tasas.length - 1; i >= 0; i--) {
                        arreglo.push([res.tasas[i].id, res.tasas[i].TEA, res.tasas[i].plazo_dias, res.tasas[i].retorno])
                        datos.tea = arreglo
                    }
                    arreglo.splice(4, 0, ['', '', '', '']);
                    arreglo.splice(6, 0, ['', '', '', '']);
                    arreglo.push(['', '', '', ''])
                }
                simulationItems.value.push(datos)
                id++
            }
        })
    })

    return total
})

// Lifecycle
onMounted(async () => {
    await loadPaymentFrequencies()
    scheduleForm.value.startDate = new Date()
})
</script>