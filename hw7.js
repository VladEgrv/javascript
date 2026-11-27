/* Ф-ция addFlight(flightNumber, destination, departureTime, capacity) - добавляет новый рейс с указанными параметрами.
Ф-ция cancelFlight(flightNumber) - отменяет рейс с указанным номером.
Ф-ция registerPassenger(flightNumber, passengerName) - регистрирует пассажира на рейс с указанным номером.
Ф-ция findFlightByNumber(flightNumber) - ищет рейс по номеру и выводит его информацию.
Ф-ция showAllFlights() - выводит список всех рейсов.
Ф-ция showFlightPassengers(flightNumber) - выводит список пассажиров на рейсе с указанным номером. */


const flightsDatabase = new Map();

function getFlight(flightNumber) {
    if (typeof flightNumber !== "string" || flightNumber.trim().length === 0) {
        throw new Error("Номер рейса должен быть указан строкой и не должен быть пустым");
    }
    if (!flightsDatabase.has(flightNumber.trim())) {
        throw new Error("Номер рейса отсутствует в базе");
    }
    const flight = flightsDatabase.get(flightNumber.trim());
    return flight;
}

function addFlight(flightNumber, destination, departureTime, capacity) {
    if (typeof flightNumber !== "string" || flightNumber.trim().length === 0) {
        throw new Error("Номер рейса должен быть указан строкой и не должен быть пустым");
    }
    if (flightsDatabase.has(flightNumber.trim())) {
        throw new Error("Номер рейса уже есть в базе");
    }
    if (typeof destination !== "string" || destination.trim().length === 0) {
        throw new Error("Пункт назначения рейса должен быть указан строкой и не должен быть пустым");
    }
    if (!Number.isInteger(capacity) || capacity <= 0) {
        throw new Error("Вместимость рейса должна быть целым положительным числом");
    }
    if (typeof departureTime !== "string" || departureTime.trim().length === 0) {
        throw new Error("Некорректная дата. Введите в формате 2026-12-15T14:30:00");
    }
    const date = new Date(departureTime);
    if (Number.isNaN(date.getTime())) {
        throw new Error("Некорректная дата. Введите в формате 2026-12-15T14:30:00");
    }
    const flightInfo = {
        destination: destination.trim(),
        departureTime: date,
        capacity: capacity,
        passengers: [],
        status: "scheduled"
    };
    flightsDatabase.set(flightNumber.trim(), flightInfo);
}

function cancelFlight(flightNumber) {
    const flight = getFlight(flightNumber);
    if (flight.status === "cancelled") {
        throw new Error("Рейс уже отменен");
    }
    flight.status = "cancelled";
}

function registerPassenger(flightNumber, passengerName) {
    if (typeof passengerName !== "string" || passengerName.trim().length === 0) {
        throw new Error("Имя пассажира должно передаваться в не пустой строке");
    }
    const flight = getFlight(flightNumber);
    if (flight.status === "cancelled") {
        throw new Error("Невозможно зарегистрировать пассажира: рейс отменен");
    }
    if (flight.passengers.includes(passengerName.trim())) {
        throw new Error("Невозможно зарегистрировать пассажира: пассажир уже зарегистрирован на рейсе");
    }
    if (flight.passengers.length >= flight.capacity) {
        throw new Error("Невозможно зарегистрировать пассажира: места на рейсе заняты");
    }
    flight.passengers.push(passengerName.trim());
}

function findFlightByNumber(flightNumber) {
    const flight = getFlight(flightNumber);
    console.log([
        `Рейс: ${flightNumber.trim()}`,
        `Пункт назначения: ${flight.destination}`,
        `Время вылета: ${flight.departureTime.toLocaleString("ru-RU")}`,
        `Вместимость: ${flight.capacity}`,
        `Свободных мест: ${flight.capacity - flight.passengers.length}`,
        `Статус: ${flight.status}`,
        ""
    ].join("\n"));
}

function showAllFlights() {
    if (flightsDatabase.size === 0) {
        throw new Error("В базе данных отсутствуют рейсы");
    }
    const tableOfFlight = [];
    for (const [key, value] of flightsDatabase) {
        const flightRow = {
            "Номер рейса": key,
            "Назначение": value.destination,
            "Вылет": value.departureTime.toLocaleString("ru-RU"),
            "Статус": value.status
        };
        tableOfFlight.push(flightRow);
    }
    console.table(tableOfFlight);
}

function showFlightPassengers(flightNumber) {
    const flight = getFlight(flightNumber);
    if (flight.passengers.length === 0) {
        console.log(`На рейс ${flightNumber} не зарегистрировано пассажиров`);
        return;
    }
    console.log(`Пассажиры рейса ${flightNumber}: ${flight.passengers.join(", ")}`);
}