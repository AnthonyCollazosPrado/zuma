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
            <div class="col-span-8 lg:col-span-4 mb-5">
                <h3 class="m-0 text-[#171717]">Mi billetera</h3>
                <p class="m-0 text-[#171717]">Puedes utilizar ambas monedas al momento de hacer la inversión.
                </p>
            </div>
            <div class="col-span-8 lg:col-span-4 text-end mb-5">
                <Button label="Calcular" icon="pi pi-plus"
                    class="!border-none !text-white !bg-[#171717] hover:!bg-[#6790FF] focus:!border-none focus:!bg-[#FF4929] !font-bold !rounded-3xl !px-5 !py-3 !me-3 !transition !duration-100 !ease-in" />
                <Button label="Retiro" icon="pi pi-minus"
                    class="border-general-black !border-none !text-[#171717] !bg-transparent hover:!bg-[#6790FF] focus:!border-none focus:!bg-[#FF4929] !font-bold !rounded-3xl !px-5 !py-3 !transition !duration-100 !ease-in" />
                <Button v-if="wallet" @click="showWallet" icon="pi pi-angle-up" aria-label="Mostrar Billetera"
                    variant="link" class="!text-black" />
                <Button v-else @click="showWallet" icon="pi pi-angle-down" aria-label="Mostrar Billetera" variant="link"
                    class="!text-black" />
            </div>
            <div class="col-span-8">
                <button type="button"
                    class="text-[#171717] bg-white focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                    <img src="/imagenes/zuma/pen.png" alt="Logo Zuma" class="inline-block me-2" width="20" />
                    <span class="inline-block align-middle">PEN</span>
                </button>
                <div v-if="wallet" class="grid grid-cols-3 gap-4 my-5">
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-wallet text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Saldo disponible</h5>
                                <h3 class="text-[#171717] m-0 font-bold">S/ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-building-columns text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Total invertido</h5>
                                <h3 class="text-[#171717] m-0 font-bold">S/ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-money-bill text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Retorno esperado</h5>
                                <h3 class="text-[#171717] m-0 font-bold">S/ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button"
                    class="text-[#171717] bg-white focus:outline-none hover:bg-[#6790FF] focus:bg-[#FF4929] font-bold rounded-3xl px-5 py-3 me-3 transition duration-100 ease-in">
                    <img src="/imagenes/zuma/usd.png" alt="Logo Zuma" class="inline-block me-2" width="20" />
                    <span class="inline-block align-middle">USD</span>
                </button>
                <div v-if="wallet" class="grid grid-cols-3 gap-4 mt-5">
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-wallet text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Saldo disponible</h5>
                                <h3 class="text-[#171717] m-0 font-bold">$ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-building-columns text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Total invertido</h5>
                                <h3 class="text-[#171717] m-0 font-bold">$ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 lg:col-span-1">
                        <div class="rounded-3xl bg-white relative p-10">
                            <i
                                class="pi pi-money-bill text-[#171717] !text-[2.8rem] inline-block align-top mt-5 mb-3 me-10"></i>
                            <div class="inline-block">
                                <h5 class="text-[#171717] m-0 font-semibold">Retorno esperado</h5>
                                <h3 class="text-[#171717] m-0 font-bold">$ 0.00</h3>
                                <a class="text-[#6790FF] m-0 font-medium">Ver más...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-5">
        <div class="col-span-2 lg:col-span-1">
            <div class="border-general-grey rounded-3xl bg-white relative p-10">
                <h5 class="text-[#171717] m-0 font-semibold w-full">Última factura invertida</h5>
                <div class="text-center my-20">
                    <p class="font-bold mt-0 mb-3 fill-[#171717]">¡Ups aún no has invertido en una factura!</p>
                    <svg xmlns='http://www.w3.org/2000/svg' class="fill-[#171717] relative mx-auto" width='169.333'
                        height='228' version='1.0' viewBox='0 0 127 171'>
                        <path
                            d='M106.5 2.3c-3.3.5-6.1 1.1-6.3 1.2-.4.4 9.8 53.8 10.4 54.4.2.2 2.8 0 5.9-.4l5.6-.7-.6-3.1c-.7-3.9-6.5-50.2-6.5-51.6 0-1.2-.2-1.2-8.5.2zM44 16.1C25.6 18.8 10.1 31.7 4 49.4c-8.1 23.5 2.9 50.3 24.8 60.8l6.9 3.3-2.6 4.9c-2.5 4.9-2.6 5.5-2.9 27.8l-.3 22.8H51v-3c0-2.2-.5-3-1.8-3-1 0-2.8-.7-4-1.6-2.1-1.5-2.2-2.1-2.2-18.6 0-19.2.5-21 7-24.7 6.5-3.6 13.6-2.4 18.9 3.2 2 2.2 2.8 5.6 5.8 23.3 1.9 11.5 3.6 21 3.9 21.3.4.4 15.3-1.5 18.5-2.5 1.1-.3 1.4-1.3 1.1-3.4-.4-2.5-.9-3-3.1-3-5.5 0-6.2-1.5-9.1-19.1-2.7-16.3-4.3-21.2-8.4-25.8l-2.1-2.3 2.5-1.6c7.2-4.7 14.3-12.9 18.3-21.1 3.7-7.8 4.1-9.2 4.5-18.7.4-8.4.1-11.4-1.6-17.1-5.7-18.6-21.5-32.2-40.9-35.2-3.9-.6-7.5-1-8-1-.4.1-3.3.5-6.3 1zm23.2 14.1c8 3.7 15.2 10.7 19.1 18.7 2.9 6.1 3.2 7.4 3.2 16.6 0 8.8-.3 10.7-2.7 15.7C75.2 106 43.1 112 24 93 3.3 72.2 12.1 37.7 40.5 28.3c6.6-2.1 19.9-1.2 26.7 1.9z' />
                        <path
                            d='M43.7 35.6c-.3.3-.3 2-.1 3.7.5 2.9.2 3.4-3.2 5.2-5.3 2.8-7.9 6.8-7.9 11.9 0 8.9 4.3 12.3 17 13.6 9.3 1 10 1.2 11.5 4.1 1.8 3.2-2.8 6.9-8.4 6.9-3.7 0-4.8-.5-7-3.1-2.5-2.9-3-3.1-7.2-2.4-4.3.6-4.5.8-4 3.3 1 4 6.8 9 12.1 10.3 4 1 4.5 1.4 4.5 4 0 3.4.5 3.7 5.3 3.1 3.8-.4 3.9-.5 3.3-3.8-.6-3.1-.4-3.5 3.3-5.3 7.4-3.8 10.6-11.5 7.8-18.3-2.2-5.3-5.4-6.9-15.9-8-10-1-11.8-1.8-11.8-5.4 0-6.6 12.7-7.2 15.1-.7.7 1.7 9.3 0 9.7-1.8.7-3.5-8-10.9-12.6-10.9-2.1 0-3.2-1.8-3.2-5.1 0-1.5-.7-1.9-3.8-1.9-2.1 0-4.1.3-4.5.6zM115.4 63c-2.9 1.1-5.4 4.9-5.4 7.8 0 3.2 5.2 8.2 8.5 8.2 3.4 0 8.5-5 8.5-8.4 0-5.2-6.8-9.6-11.6-7.6z' />
                    </svg>
                    <p class="mt-3 mb-0 fill-[#171717]">Comienza a generar ganancias!</p>
                </div>
            </div>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <div class="border-general-grey rounded-3xl bg-white relative p-10">
                <h5 class="text-[#171717] mt-0 mb-3 font-semibold w-full">Ranking top 6 inversionistas</h5>
                <div class="rounded-3xl bg-[#EAB40A] ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#EAB40A] m-0 rounded-[3rem] bg-white inline-block w-[49px] py-[14px] text-center me-3">
                            LU
                        </p>
                        <h5 class="font-medium text-white m-0 inline-block">Lu - S/ 13,300.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            1
                        </h5>
                    </div>
                </div>
                <div class="rounded-3xl bg-[#FF4929] ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#FF4929] m-0 rounded-[3rem] bg-white inline-block w-[49px] py-[14px] text-center me-3">
                            AN
                        </p>
                        <h5 class="font-medium text-white m-0 inline-block">Anthony - S/ 12,300.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            2
                        </h5>
                    </div>
                </div>
                <div class="rounded-3xl bg-[#6790FF] ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#6790FF] m-0 rounded-[3rem] bg-white inline-block w-[49px] py-[14px] text-center me-3">
                            JE
                        </p>
                        <h5 class="font-medium text-white m-0 inline-block">Jeferson - S/ 1,300.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            3
                        </h5>
                    </div>
                </div>
                <div class="rounded-3xl border-general-grey ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#171717] m-0 rounded-[3rem] border-general-grey inline-block w-[49px] py-[14px] text-center me-3">
                            MA
                        </p>
                        <h5 class="font-medium text-[#171717] m-0 inline-block">Martin - S/ 300.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            4
                        </h5>
                    </div>
                </div>
                <div class="rounded-3xl border-general-grey ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#171717] m-0 rounded-[3rem] border-general-grey inline-block w-[49px] py-[14px] text-center me-3">
                            JO
                        </p>
                        <h5 class="font-medium text-[#171717] m-0 inline-block">José - S/ 200.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            5
                        </h5>
                    </div>
                </div>
                <div class="rounded-3xl border-general-grey ps-3 pe-5 py-3 mt-5">
                    <div class="w-4/5 inline-block">
                        <p
                            class="font-bold text-[#171717] m-0 rounded-[3rem] border-general-grey inline-block w-[49px] py-[14px] text-center me-3">
                            BR
                        </p>
                        <h5 class="font-medium text-[#171717] m-0 inline-block">Brian - S/ 100.00</h5>
                    </div>
                    <div class="w-1/5 inline-block text-end">
                        <h5 class="text-white m-0 rounded-3xl bg-[#171717] inline-block w-[34px] py-[4px] text-center">
                            6
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<script setup>
import { simulationService } from '@/services/simulationService';
import { useToast } from "primevue/usetoast";
import { computed, onMounted, ref } from "vue";

const toast = useToast();
const detaill = ref(false);
const schedule = ref(false);
const wallet = ref(false);
const home = ref({ icon: 'pi pi-home' });
const items = ref([{ label: 'Mi billetera' }]);

const simulationItems = ref()
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
const scheduleData = ref(null)
const comparisonResults = ref([])

const compareForm = ref({
    selectedRates: [],
    paymentFrequencyId: null
})

// Formularios
const simulationForm = ref({
    amount: ''
})

const activeTab = ref(0)
const scheduleForm = ref({
    paymentFrequencyId: null,
    startDate: new Date(),
    taxRate: 0.05
})

const showWallet = () => {
    if (wallet.value) {
        wallet.value = false
    } else {
        wallet.value = true
    }
}

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

            schedule.value = true
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

const sumFormat = (amountA, amountB) => {
    console.log(amountA);
    console.log(amountB);
    return parseFloat(amountA.slice(3)) + parseFloat(amountB)
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